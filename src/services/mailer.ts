import { Service } from "typedi";

@Service()
export default class MailerService {
  constructor() {
    console.log('Mailer service instantiated');
  }
}
