<badge>
  <span
    class={compileClass()}
    data-badge-caption={ opts.caption }>
    <yield>
  </span>
  <script>
    this.compileClass = () => {
      let clazz = 'badge';
      if (typeof this.opts.new !== 'undefined') {
        clazz += ' new';
      }
      if (this.opts.color) {
        clazz += ' ' + this.opts.color;
      }
      return clazz;
    }
  </script>
</badge>
