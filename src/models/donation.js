import Model from './model'

export default class Donation extends Model {
	resource() {
		return 'donations'
	}

	cancel() {
		this.canceled = true;
		return this.save();
	}
}
