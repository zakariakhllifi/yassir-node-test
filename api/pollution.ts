import { Router, Request, Response } from 'express';
import fetchApi from '../utils/fetchApi';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = Router();


// @route   GET api/pollution/
// @desc    Get pollution rate in the nearbiest city to the given lat & lon
// @access  Public
// @params: URL params: req, lon
router.get('/', async (req: Request, res: Response) => {
    try {
      const data = await fetchApi(parseInt(req.params.lat), parseInt(req.params.lon))
      res.status(200).json(data)
    } catch (error) {
        res.status(500).send('Server error')
    }
})

// @route   GET api/pollution/most_polluted
// @desc    Get the datetime where paris is the most polluted (using the aqius value) 
// @access  Public
// @params: none
router.get('/most_polluted', async (req: Request, res: Response) => {
    try {
        const response = await prisma.parisAirQuality.findMany({
                orderBy: {
                    aqius: 'desc',
                },
                take: 1,
                select: {
                    createdAt: true,
                }
          })
          res.status(200).json(response)
    } catch (error) {
        res.status(500).send('Server error')
    }
})

export default router;