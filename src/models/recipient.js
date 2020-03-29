import Model from './model';
import Org from './org';
import OrgMember from './org_member';

export default class Recipient extends Model {
	resource() {
		return 'recipients'
	}

	org () {
		return this.belongsTo(Org)
	}

	orgMember () {
		return this.belongsTo(OrgMember)
	}
}
