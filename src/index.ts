import dotenv from 'dotenv'
dotenv.config()

import '@/infrastructure/logger'
import '@/infrastructure/serverHttpFastify'
import '@/infrastructure/dataSource/databaseMongodb'

import { startApp } from '@/application'

startApp()
