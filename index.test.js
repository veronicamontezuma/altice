import { generateUserPost, get } from './index.js';

import FIRST_USER_RESULT from './mock/result-first-user.json'
import POSTS from './mock/posts.json'
import USERS from './mock/users.json'

const API_USERS = "https://jsonplaceholder.typicode.com/users";
const API_POSTS = "https://jsonplaceholder.typicode.com/posts";


test('should return error if url is not defined', async () => {
  const args = [null, undefined, NaN, '', 0, false];
  args.forEach(a => {
      expect(() => {
        get(a, a)
      }).toThrow();
  });
});

test('should return success if url is defined', async () => {
  expect(() => {
    get(API_USERS, API_POSTS)
  }).not.toThrow();
});

test('should return first user successfuly', async () => {
  const result = generateUserPost([USERS, POSTS]);
  expect(result[0]).toStrictEqual(FIRST_USER_RESULT);
});
