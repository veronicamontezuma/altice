const API_USERS = "https://jsonplaceholder.typicode.com/users";
const API_POSTS = "https://jsonplaceholder.typicode.com/posts";

export function get(users_url, posts_url) {
	if (!users_url || !posts_url) {
		throw new Error("Invalid URL");
	}
	return Promise.all([fetchData(users_url), fetchData(posts_url)])
		.then((response) => {
			const content = generateUserPost(response);
			displayResult(JSON.stringify(content));
		})
		.catch(() => {
			displayResult('Error fetching data');
		});
}

export function generateUserPost(response) {
	const users = response[0];
	const posts = response[1];

	let userPosts = users.map((user) => {
		formatUserData(user);
		user.posts = posts.filter((post) => {
			if (user.id === post.userId) {
				delete post.userId;
				return post;
			}
		});
	
		return user;
	});

	return userPosts
}

function fetchData(url) {
	return fetch(url)
		.then((response) => response.json())
}

function displayResult(message) {
	if (typeof window !== 'undefined') {
		document.getElementById("results").innerHTML = message;
	}
}

function formatUserData(user) {
	user.company = user.company.name;
	user.address = `${user.address.street}, ${user.address.suite} - ${user.address.zipcode} ${user.address.city}`;
}

get(API_USERS, API_POSTS);
