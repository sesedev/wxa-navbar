Component({
  options: {
    addGlobalClass: true
  },

  externalClasses: ['custom-class'],

  properties: {
    info: null,
    name: String,
    size: String,
    color: String,
    block:{
      type:Boolean,
      value:false
    }
  },

  methods: {
    onClick() {
      this.triggerEvent('click');
    }
  }
});
