import { Injectable } from '@angular/core';

import { Contact } from '../models/contact'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] =[
    {
      firstName: 'Alfred',
      lastName: 'Planter',
      phoneNumber: 2343454567,
      email: 'alfredtheplanter@gmail.com'
    },
    {
      firstName: 'Brandon',
      lastName: 'Beck',
      phoneNumber: 2934822342,
      email: 'brandon.beck@yahoo.com'
    },
    {
      firstName: 'Daisy',
      lastName: 'Harvey',
      phoneNumber: 8392834583,
      email: 'daisyharvery22@gmail.com'
    },
    {
      firstName: 'Patrick',
      lastName: 'Wilson',
      phoneNumber: 2834723891,
      email: 'patrickwilson19@yahoo.com'
    }
  ];

  constructor() { }
}
