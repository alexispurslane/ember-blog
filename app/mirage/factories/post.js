import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
    title: faker.hacker.phrase,
    body(i) {
	return faker.lorem.paragraphs(i);
    },
    description: faker.hacker.phrase,
    timestamp: faker.date.recent
});
