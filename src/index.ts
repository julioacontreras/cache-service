import dotenv from 'dotenv'
dotenv.config()

import '@/infrastructure/logger'
import '@/infrastructure/serverHttpFastify'
import '@/infrastructure/fastdata'

import { startApp } from '@/application'

startApp()
