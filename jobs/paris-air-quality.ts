import {CronJob} from 'cron'
import fetchApi from '../utils/fetchApi';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const paristat = 48.856613
const parisLon = 2.352222

export default () => {
         new CronJob(
            '59 * * * * *',
                async () => {
                   const data =  await fetchApi(paristat, parisLon)
                   await prisma.parisAirQuality.create({
                        data
                   })
                },
        null,
        true
    );
}