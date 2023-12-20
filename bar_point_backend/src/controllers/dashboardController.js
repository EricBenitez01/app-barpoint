const db = require('../database/models');
const bcrypt = require('bcrypt');
const path = require("path");
const fs = require('fs').promises;
const {
    Op,
    sequelize
} = require('sequelize');

module.exports = {
    status: async (req, res) => {
        try {
            let businessId = req.params.id;

            const currentDate = new Date();

            const lastMonth = new Date();
            lastMonth.setMonth(lastMonth.getMonth() - 1);

            const lastWeek = new Date();
            lastWeek.setDate(lastWeek.getDate() - 7);

            const timestampValue = currentDate.getTime() / 1000.0;

            const userCount = await db.User_points.count({
                where: {
                    businessfk: businessId,
                },
            });

            const userPointsLastMonth = await db.User_points.sum('quantity', {
                where: {
                    businessfk: businessId,
                    create_time: {
                        [Op.gte]: lastMonth,
                    },
                },
            });

            const userPointsLastWeek = await db.User_points.sum('quantity', {
                where: {
                    businessfk: businessId,
                    create_time: {
                        [Op.gte]: lastWeek,
                    },
                },
            });

            const benefitCreated = await db.Benefit.count({
                where: {
                    businessfk: businessId
                },
            });

            res.status(200).json({
                users: userCount,
                userPointsLastMonth: userPointsLastMonth,
                userPointsLastWeek: userPointsLastWeek,
                benefitCreated: benefitCreated,
            });
        } catch (error) {
            console.error('Error al obtener los puntos del último mes:', error);
            res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }

}