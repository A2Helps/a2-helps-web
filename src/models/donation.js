import Model from './model'

export default class Donation extends Model {
	resource() {
		return 'donations'
	}

	cancel() {
		return this.sync({ canceled: true });
	}
}
