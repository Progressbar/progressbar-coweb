<template>
<div class="CherryResidents">
  <div class="columns">
    <div class="column is-12">
      <article class="tile is-child notification is-black is-size-4">
        <p class="title">Technology Meetups</p>
        <div class="columns">
          <div class="column is-3" v-for="r in meetups.slice(0,4)">
            <a :href="r.url"><img :src="`/static/img/residents/${r.src}`" loading="lazy" :alt="r.name"><br>{{r.name}}</a>
            <br><span v-html="r.desc"></span>
          </div>
        </div>
        <div class="columns">
          <div class="column is-3" v-for="r in meetups.slice(4,8)">
            <a :href="r.url"><img :src="`/static/img/residents/${r.src}`" loading="lazy" :alt="r.name"><br>{{r.name}}</a>
            <br><span v-html="r.desc"></span>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
</template>
<script>

export default {
  name: 'CherryResidents',
  data() {
    return {
      href: {
        coworkGroup: 'https://t.me/coworkprogressbar'
      },
      meetups: [
        {
          name: 'Machine Learning Meetup Bratislava',
          src: 'machine_learning_meetup_bratislava.jpeg',
          url: 'https://www.meetup.com/Machine-Learning-Bratislava-Meetups/',
          desc: 'Machine Learning Meetups Bratislava is a meetup for people interested in machine learning and related topics like AI, data mining, computer vision, information retrieval, natural language processing.'
        },
        {
          name: 'Open Blockchain Bratislava',
          src: 'open_blockchain_bratislava.jpeg',
          url: 'https://www.meetup.com/openblockchainbratislava/',
          desc: 'Blockchain meetups in Bratislava, recently focused on Ethereum and other blockchains'
        },
        {
          name: '.NET Bratislava Meetup',
          src: 'dotnet_bratislava_meetup.jpeg',
          url: 'https://www.meetup.com/NET-Bratislava-Meetup',
          desc: 'The monthly meetup for .NET enthusiasts in Bratislava. Find more at <a href="https://net-ba.github.io">net-ba.github.io</a>'
        },
        {
          name: 'CodeBeer Bratislava',
          src: 'code_beer_meetups.png',
          url: 'https://www.facebook.com/codebeer.sk/',
          desc: 'Meetups around various programming languages with newcomers and experienced developers looking to chat and exchange knowledge'
        },
        {
          name: 'Unreal User group Slovakia',
          src: 'unreal_user_group_slovakia.jpeg',
          url: 'https://www.meetup.com/Unreal-User-Group-Slovakia/',
          desc: 'This group is for Unreal Engine users in Slovakia and surrounding countries.'
        },
        {
          name: 'PyLadies Bratislava',
          src: 'pyladies_bratislava.jpg',
          url: 'https://www.pyladies.com/',
          desc: 'Python learning meetups for women. They will help you with everyhting pythonise, from total beginner to advanced skills. Learn more <a href="https://www.pyladies.com/">pyladies.com</a>'
        },
        {
          name: 'Bratislava Python Meetup',
          src: 'bratislava_python_meetup.jpeg',
          url: 'https://spy.pycon.sk/sk/',
          desc: 'Python Meetups & <a href="https://pycon.sk">Pycon.sk</a> organisers'
        },
        {
          name: 'Nodeschool Bratislava',
          src: 'nodeschool-bratislava-sticker.svg',
          url: 'https://www.meetup.com/nodejsbratislava/',
          desc: 'Nodejs and learning meetup in Bratislava'
        },
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .button.is-black.is-block.is-large.meeting {
    background-image: linear-gradient(to right top, #b60cf6, #9316e5, #711ad4, #4c1ac1, #1e19ae);
  }

  .notification {
  padding: 0;
  }
</style>
