<template>
<div id="table-wrap">
      <table>
        <thead>
        <tr>
            <th>등급</th>
            <th>NICE</th>  
            <th>KCB</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(tableSample, index) in tableSamples" :key="index">
            <td>{{index+1}}</td>
            <td>{{tableSample.nice}}</td>
            <td>{{tableSample.kcb}}</td>
        </tr>
    </tbody>
    </table>
    
  </div>  
</template>

<script>
export default {
  data() {
    return {
      showModal : false,
      tableSamples : [
        {nice : '900점~1000점', kcb : '942점~1000점'},
        {nice : '870점~899점', kcb : '891점~941점'},
        {nice : '840점~869점', kcb : '832점~890점'},
        {nice : '805점~839점', kcb : '768점~831점'},
        {nice : '750점~804점', kcb : '698점~767점'},
        {nice : '665점~749점', kcb : '630점~697점'},
        {nice : '600점~664점', kcb : '530점~629점'},
        {nice : '515점~599점', kcb : '454점~529점'},
        {nice : '445점~514점', kcb : '335점~453점'},
        {nice : '0점~444점', kcb : '0점~334점'},
      ]
    }
  },
  components : {

  },
  methods : {
      removeUser(tableSample, index) {
          this.tableSamples.splice(index, 1)
      }
  }
}
</script>

<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: auto;

    /* from bxuip */
    /* 상위 컨테이너에서 align을 center후, margin에 auto 부여시 중앙정렬 */
    /* margin에 auto만 부여해도 중앙정렬이 되긴 함 */
    margin: auto;  

    table-layout: fixed !important;
    border-spacing: 0 !important;
    border-collapse: collapse !important;
    text-align: center !important;
    border-width: 0;
    border-left: 1px solid #e6e6e6 !important;
    border-style: none;
    padding: 1000px;
    font-size: 12px;
    font-family: 'notokr';
    font-weight: normal;
    display: table;
    border-color: grey;
    line-height: normal;
    color: #454545;
    
/* =======================끝 */
  }

  thead{
      /* bwg 에서 가져옴 */
      display: table-header-group;
      vertical-align: middle;
      border-color: inherit;
      table-layout: fixed !important;
    border-spacing: 0 !important;
    border-collapse: collapse !important;
    text-align: center !important;
    border-width: 0;
    border-style: none;
    font-family: 'notokr';
    font-weight: normal;
    margin: 0;
    padding: 0;
    font-size: 12px;
      /* end */
  }

  th {
      /* from bwg */
      padding: 0px;
      height: 40px !important;
      letter-spacing: -.5px !important;
      font-weight: 500 !important;
      font-size: 12px !important;
      width: 103px;
      overflow: hidden;
      white-space: nowrap;
      text-align: center;
      border-bottom: none !important;
      border-left: 1px solid #e6e6e6 !important;
      border-top: 1px solid #e6e6e6 !important;
      background: #fbfbfb !important;
      color: rgba(84, 156, 84) !important;
      border: 1px solid #c5c5c5;
      border-right: 1px solid #e6e6e6 !important;
      margin: 0;
      display: table-cell;
    vertical-align: inherit;
    table-layout: fixed !important;
    border-spacing: 0 !important;
    border-collapse: collapse !important;
    line-height: normal;
      /* end */
  }

  tr {
      /* from bwg */
      outline-style: none;
      background: #fff;
      color: #333;
      display: table-row;
    vertical-align: inherit;
    table-layout: fixed !important;
    border-spacing: 0 !important;
    border-collapse: collapse !important;
    text-align: center !important;
    font-family: 'notokr';
    font-weight: normal;
    margin: 0;
    padding: 0;
    font-size: 12px;
    line-height: normal;

      /* end */
  }

td {
    /* from bwg */
    border-color: initial;
    height: 40px !important;
    font-size: 12px !important;
    text-align: center;
    text-overflow: ellipsis;
    border-left-width: 0;
    border-bottom: 1px solid #eeeeee !important;
    border-right: 1px solid #e6e6e6 !important;

    color: #666666 !important;
    border-left-style: none !important;
    font-weight: normal;
    padding: 0 2px 0 2px;
    border-top: 0 none;
    overflow: hidden;
    white-space: pre;
    vertical-align: middle;
    margin: 0;
    display: table-cell;
    border-spacing: 0 !important;
    border-collapse: collapse !important;

    /* end */
}
/* end grid css */

    #gb-button {
        box-sizing: border-box;
        width: auto;
        height: 25px;
        line-height: 25px;
        cursor: pointer;
        display: inline-block;
        border: 0;
        padding: 0 10px;
        border-radius: 3px;
        font-size: 11px;
        text-transform: capitalize;
        color: white;
        background: #1297bf;
    }
</style>