export default (await import('vue')).default.extend({
data() {
return {
width: '100px',
height: '100px',
};
},
mounted() {
this.width = document.body.clientWidth - 150 + "px";
this.height = ((document.body.clientWidth - 150) * 607) / 1742 + "px";
},
});
