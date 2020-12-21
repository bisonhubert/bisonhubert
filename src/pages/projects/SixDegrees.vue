<template>
  <Layout>
    <!-- Uses Twitter bot 1. 2 field form w/ one actor in each 2. Generates Tweet on -->
    <!-- my profile 3. Comments bot kickoff to show all permutations up to 6 films -->
    <!-- MVP + 1. Validate actors names before submitting -->

    <h1>Twitter Bot: Six Degrees of Kevin Bacon</h1>
    <button @click="sendTweet">Tweet</button>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Twitter Bot: Six Degrees of Kevin Bacon',
  },
  methods: {
    sendTweet() {
      const headers = {
        'Access-Control-Allow-Origin':
          'http://localhost:8080/projects/six-degrees',
        // 'Access-Control-Allow-Origin': '*',
        Authorization:
          'OAuth oauth_consumer_key="UnPRCstDBvtXZjNDbMxxEgLcg",oauth_token="1339748946118234113-B06AYeFjBxvwkpiAN0QOlFEMurGIsI",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1608530984",oauth_nonce="J0eXp8nwtA0",oauth_version="1.0",oauth_signature="j91Kpi8rZqml6wB3VhektmWm58s%3D"',
        Cookie:
          'personalization_id="v1_dg0KzNnioDZZNUijUWnCeg=="; guest_id=v1%3A160852868959380296; lang=en',
      };

      var formdata = new FormData();
      formdata.append('status', 'Testing...');

      var requestOptions = {
        method: 'POST',
        headers,
        body: formdata,
        redirect: 'follow',
      };

      const twitter = 'https://api.twitter.com/1.1/statuses/update.json';
      fetch(twitter, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
