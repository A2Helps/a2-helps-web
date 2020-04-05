import Model from './model';
import Org from './org';
import OrgMember from './org_member';

export default class Code extends Model {
	resource() {
		return 'codes'
	}

	org () {
		return this.belongsTo(Org)
	}

	orgMember () {
		return this.belongsTo(OrgMember)
	}
}
