<template>
<div class="subscribe">
    <div class="columns is-mobile">
      <div class="column is-narrow">
          <a class="button is-outlined is-success" href="#">{{this.counts.free}} free seats</a>
          <a class="button is-outlined is-primary" href="#">{{this.counts.waitlist}} on waitlist</a>
          <a class="button is-outlined is-info" href="#">Capacity {{this.counts.capacity}} seats</a>
      </div>
    </div>
      <div class="columns">
            <div class="column is-narrow">
                  <div class="control has-icons-left has-icons-right">
                        <input class="input is-medium is-white" type="email" placeholder="Email">
                        <span class="icon is-medium is-left">
                              <i class="fa fa-envelope"></i>
                        </span>
                        <!-- <span class="icon is-medium is-right">
                      <i class="fa fa-check"></i>
                </span> -->
                  </div>
            </div>
            <div class="column is-narrow">
              <a class="button is-warning is-medium is-outlined">Subscribe me to the queue</a>
            </div>
      </div>
<div class="columns">
  <div class="column is-narrow">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Every package incl.
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fa fa-headphones" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          <ul>
            <li>
              <a href="https://www.google.com/maps/place/Progressbar+hackerspace/@48.1442331,17.1066804,17z/">Place for work in downtown</a>
            </li>
            <li>
              High-speed internet (250/20)
            </li>
            <li>
              Standing desk (shared)
            </li>
            <li>
              Place to call (Foyer)
            </li>
          </ul>
          <br>
        </div>
      </div>
      <!-- <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            <a class="button is-medium is-outlined" disabled>I Want this</a>
          </span>
        </p>
      </footer> -->
    </div>
  </div>
  <div class="column is-narrow">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Daypass
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fa fa-headphones" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          <ul>
            <li>
              7am - 10pm access
            </li>
            <li>
              HotDesk (shared)
            </li>
            <li>
              5€ / day
            </li>
          </ul>
          <br>
        </div>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            <a class="button is-medium is-outlined" disabled>Order</a>
          </span>
        </p>
      </footer>
    </div>
  </div>
  <div class="column is-narrow">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          HotDesk
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fa fa-headphones" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          <ul>
            <li>
              24/7 access
            </li>
            <li>
              HotDesk
            </li>
            <li>
              60€ / month
            </li>
          </ul>
          <br>
        </div>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            <a class="button is-medium is-outlined" disabled>Order</a>
          </span>
        </p>
      </footer>
    </div>
  </div>
  <div class="column is-narrow">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          FixDesk
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fa fa-headphones" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          <ul>
            <li>
              24/7 access
            </li>
            <li>
              Fixdesk
            </li>
            <li>
              100€ / month
            </li>
          </ul>
          <br>
        </div>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            <a class="button is-medium is-outlined" disabled>Order</a>
          </span>
        </p>
      </footer>
    </div>
  </div>
</div>
<div class="columns is-mobile">
  <div class="column is-narrow">
    <a class="button is-large is-outlined is-light" href="#">I want to see the space (VR)</a>
  </div>
</div>
</div>
</template>

<script>
import Status from '@/components/Status'

export default {
  name: 'subscribe',
  data() {
    return {
      counts: {
        free: 6,
        waitlist: 4,
        capacity: 12
      }

    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '~font-awesome/css/font-awesome.css';
/*@import '~bulma/css/bulma.css';*/
input {
  background-color: #000
}
</style>
