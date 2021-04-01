const isDesktop = (this) => {
    console.log("this", this)
    let { name } = this.$vuetify.breakpoint;
    return name == 'md' || name == 'lg' || name == 'xl';
}

module.exports = isDesktop