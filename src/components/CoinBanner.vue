<template>
  <b-container class="coin-banner" fluid="lg">
    <b-row>
      <b-col>
        <b-row>
          <b-col>
            <span class="coin-vendor">
              STARX
              <small>$32.154</small>
            </span>
          </b-col>
          <b-col>
            <span class="coin-value">
              32.154

              <small>+3.18%</small>
            </span>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-row>
          <b-col>
            <span class="coin-vendor">
              BTC

              <small>$32.154</small>
            </span>
          </b-col>
          <b-col>
            <span class="coin-value">
              12.256

              <small>+3.18%</small>
            </span>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-row>
          <b-col>
            <span class="coin-vendor">
              ABC

              <small>$32.154</small>
            </span>
          </b-col>
          <b-col>
            <span class="coin-value">
              21.335

              <small>+3.18%</small>
            </span>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-row>
          <b-col>
            <span class="coin-vendor">
              LOL

              <small>$33.154</small>
            </span>
          </b-col>
          <b-col>
            <span class="coin-value">
              35.154

              <small>+3.18%</small>
            </span>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-row>
          <b-col>
            <span class="coin-vendor">
              ANZ

              <small>$12.154</small>
            </span>
          </b-col>
          <b-col>
            <span class="coin-value">
              22.154

              <small>+3.18%</small>
            </span>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "CoinBanner",
};
</script>

<style lang="scss" scoped>
.row {
  align-items: center;
  margin: 0 auto;
}

.coin-banner {
  padding: 20px 0;
  .coin-vendor {
    font-weight: bold;
    color: #142157;
    small {
      display: block;
    }
  }
  .coin-value {
    font-weight: bold;
    color: red;
    font-size: 1.6em;
    line-height: 18px;
    small {
      color: rgb(17, 145, 17);
    }
  }
}

@media all and (max-width: 767px) {
  .coin-banner {
    .coin-vendor {
      font-size: 2em;
    }
    .coin-value{
          font-size: 1.3em;
    }
  }
  .col {
    flex-basis: 50%;
    flex-grow: 0;
    width: 60%;
    max-width: 100%;
    margin: 0 auto;
  }
}
</style>