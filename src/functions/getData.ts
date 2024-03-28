import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { faker } from '@faker-js/faker';

export async function getData(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    return { jsonBody: faker.helpers.multiple(createRandomUser, {count: 5}) };
};

function createRandomUser(): any {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }

app.http('getData', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: getData
});
