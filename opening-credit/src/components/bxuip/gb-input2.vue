<template>
    <div id="input2-wrap-default">
      <input id="input2-text" placeholder="Search for ..." maxlength="10"/>
      <label id="input2-label"><i class="fa fa-search" aria-hidden="true"></i></label>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#input2-wrap-default {
    vertical-align: bottom;
    position: relative;
    display: inline-block;
    padding: 0 0 0 0;
    line-height: 25px;
    height: 30px;
    background: white;
    box-shadow: 0 0 0 1px #e6e6e6 inset;
    font-family: 'notokr';
    font-weight: normal;
    margin-top: 13px;
    padding: 0;
    font-size: 12px;
    box-sizing: border-box;
    color: #000;
}

#input2-label {
    margin: 0;
    display: inline-block;
    float: left;
    background-color: rgba(84, 156, 84);
    height: 28px;
    font-size: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 30px;
    line-height: 25px;
    font-weight: 400;
    background-size: auto 100%;
    text-align: center;
    color: white;
    box-sizing: border-box;
    cursor: default;
    border-radius: 0px 5px 5px 0px;
    margin-top: 1px;
}

#input2-text {
    background-repeat: no-repeat;
    background-position-x: right;
    box-shadow: none;
    width: 300px !important;
    min-width: 50px;
    text-align: left;
    text-indent: 5px;
    margin: 0;
    display: inline-block;
    float: left;
    background-color: transparent;
    height: 30px;
    font-size: 15px;
    outline: 0;
    line-height: 13px;
    border: 0;
    padding: 0 10px 0 5px;
    color: #666666;
    box-sizing: border-box;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-shadow: none;
    -webkit-rtl-ordering: logical;
    cursor: text;
    font: 400 15px Arial;
}

.fa {
    margin-top: 5.5px;
}

</style>>
