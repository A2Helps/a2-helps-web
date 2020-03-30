import withAuthorization from './withAuthorization';

const userExistsCondition = authUser => !!authUser;

export const withUserExists = withAuthorization(userExistsCondition);

export default withUserExists;
