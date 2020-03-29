import Model from './model';
import Org from './org';
import User from './user';

export default class OrgMember extends Model {
	resource() {
		return 'org_members'
	}

	org () {
		return this.belongsTo(Org)
	}

	user () {
		return this.belongsTo(User)
	}
}
