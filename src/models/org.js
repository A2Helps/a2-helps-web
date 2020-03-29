import Model from './model';
import OrgMember from './org_member';
import Code from './code';

export default class Org extends Model {
	resource() {
		return 'orgs'
	}

	orgMembers () {
		return this.hasMany(OrgMember)
	}

	codes () {
		return this.hasMany(Code)
	}
}
