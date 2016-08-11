<breadcrumb>
  <a href="#!" name="breadcrumb" class="breadcrumb"><yield></a>
  <script>
    // appends the a element to the direct parent element
    // needed to avoid the <breadcrumb> element to be rendered
    this.parent.cols.appendChild(this.breadcrumb);
    this.unmount();
  </script>
</breadcrumb>
