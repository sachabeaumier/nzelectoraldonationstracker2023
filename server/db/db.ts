import connection from './connection'
import { Donation } from '../../client/common/donation'

export function getDonations(db = connection): Promise<Donation[]> {
  return db('donationstable').select('*')
}
