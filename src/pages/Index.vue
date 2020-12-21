<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image
      alt="Portrait of Bison Hubert taken in 2018"
      src="~/favicon.png"
      width="135"
    />

    <h1>Bison Hubert</h1>

    <p>
      Software Engineer and mentor living in Oakland, CA.
    </p>
    <p>
      He / him / his.
    </p>

    <p class="home-links">
      <a href="https://github.com/bisonhubert" target="_blank" rel="noopener"
        >Github</a
      >
      <a
        href="https://www.linkedin.com/in/bisonhubert/"
        target="_blank"
        rel="noopener"
        >LinkedIn</a
      >
      <a
        href="https://www.twitter.com/sixdegofkevinb"
        target="_blank"
        rel="noopener"
        >Twitter</a
      >
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home',
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
