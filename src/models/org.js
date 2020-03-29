import Model from './model';
import OrgMember from './org_member';
import Recipient from './recipient';

export default class Org extends Model {
	resource() {
		return 'orgs'
	}

	orgMembers () {
		return this.hasMany(OrgMember)
	}

	recipients () {
		return this.hasMany(Recipient)
	}
}
