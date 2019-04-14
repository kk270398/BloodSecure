import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
//import {Participant} from './org.hyperledger.composer.system';
// export namespace org.hyperledger_composer.scms{
   export enum ProductDesc {
      Apositive,
      Anegative,
      Bpositive,
      Bnegative,
      ABpositive,
      ABnegative,
      Opositive,
      Onegative,
   }
   export enum ProductSize {
      One,
      Two,
      Three,
   }
   export class Product extends Asset {
      productId: string;
      producttype: string;
      size: ProductSize;
      description: ProductDesc;
      owner: Participant;
      issuer: Participant;
   }
   export class Customer extends Participant {
      email: string;
      firstName: string;
      lastName: string;
      type: string;
   }
   export class Source extends Participant {
      email: string;
      firstName: string;
      lastName: string;
      type: string;
   }
   export class Laboratory extends Participant {
      email: string;
      firstName: string;
      lastName: string;
      type: string;
   }
   export class BloodBank extends Participant {
      email: string;
      firstName: string;
      lastName: string;
      type: string;
   }
   export class MoveProduct extends Transaction {
      product: Product;
      issuer: Participant;
      newOwner: Participant;
   }
// }
