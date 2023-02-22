import { setFastdata } from '@/adapters/fastdata'
import { Fastdata } from './redis'

setFastdata(new Fastdata())
