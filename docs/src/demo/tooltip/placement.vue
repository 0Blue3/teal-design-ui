<template>
  <tl-space justify="center">
    <div class="container">
      <div class="top">
        <div>
          <tl-tooltip placement="top-start">
            <tl-button type="outline">TL</tl-button>
          </tl-tooltip>
        </div>
        <div>
          <tl-tooltip placement="top">
            <tl-button type="outline">Top</tl-button>
          </tl-tooltip>
        </div>
        <div>
          <tl-tooltip placement="top-end">
            <tl-button type="outline">TR</tl-button>
          </tl-tooltip>
        </div>
      </div>
      <div class="center">
        <div>
          <div>
            <tl-tooltip placement="left-start">
              <tl-button type="outline">LT</tl-button>
            </tl-tooltip>
          </div>
          <div>
            <tl-tooltip placement="left">
              <tl-button type="outline">Left</tl-button>
            </tl-tooltip>
          </div>
          <div>
            <tl-tooltip placement="left-end">
              <tl-button type="outline">LB</tl-button>
            </tl-tooltip>
          </div>
        </div>
        <div>
          <div>
            <tl-tooltip placement="right-start">
              <tl-button type="outline">RT</tl-button>
            </tl-tooltip>
          </div>
          <div>
            <tl-tooltip placement="right">
              <tl-button type="outline">Right</tl-button>
            </tl-tooltip>
          </div>
          <div>
            <tl-tooltip placement="right-end">
              <tl-button type="outline">RB</tl-button>
            </tl-tooltip>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div>
          <tl-tooltip placement="bottom-start">
            <tl-button type="outline">BL</tl-button>
          </tl-tooltip>
        </div>
        <div>
          <tl-tooltip placement="bottom">
            <tl-button type="outline">Bottom</tl-button>
          </tl-tooltip>
        </div>
        <div>
          <tl-tooltip placement="bottom-end">
            <tl-button type="outline">BR</tl-button>
          </tl-tooltip>
        </div>
      </div>
    </div>
  </tl-space>
</template>
<style scoped>
.top,
.bottom,
.center {
  display: flex;
  justify-content: center;
}

.top > div,
.bottom > div,
.center > div > div {
  margin: 8px;
}

.center {
  justify-content: space-between;
}

.container {
  width: 500px;
  min-width: 350px;
}

.t-button {
  width: 80px;
}
</style>
