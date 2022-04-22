module.exports = (mongoose) => {
    const schema = mongoose.Schema({
        title: String,
        content: String,
        published: Boolean
    }, {
        timestamps: true, versionKey: false
    });

    schema.method('toJSON', function() {
        var obj = this.toObject();
        obj.id = obj._id;
        delete obj._id;
        return obj;
    });

    return mongoose.model("posts", schema);
}