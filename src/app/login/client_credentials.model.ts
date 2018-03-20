export class ClientCredentials{

    constructor(
        public grant_type: string,
        public client_id: number,
        public client_secret: string,
    ){}

}