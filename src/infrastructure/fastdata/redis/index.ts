import * as redis from 'redis';

export class Fastdata {
    public client: any
    
    constructor() {
        this.client = redis.createClient();
        this.client.on('error', (err:any) => console.log('Redis Client Error', err));
        this.client.on('connect', () => console.log('redis connected!'));    
        if (!this.client) {
            return
        }
    }

    public async connect (): Promise<void> {
        await this.client.connect()    
    }

    public async disconnect (): Promise<void> {
        await this.client.disconnect()    
    }

    public set(key: string, data: string): Promise<unknown> {
        return this.client.set(key, data);
    }

    public get(key: string): Promise<string> {
        return this.client.get(key);
    }    
}
