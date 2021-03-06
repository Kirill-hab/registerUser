import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';

const model = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }
});

model.pre('save', function (next) {
    const user = this;

    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (saltError, salt) {
            if (saltError) {
                return next(saltError);
            } else {
                bcrypt.hash(user.password, salt, function (hashError, hash) {
                    if (hashError) {
                        return next(hashError);
                    }
                    user.password = hash;
                    next();
                });
            }
        })
    } else {
        return next();
    }
});

model.methods.comparePassword = function(password, callback) {
    bcrypt.compare(password, this.password, (error, isMatch) => {
        if (error) {
            return callback(error);
        } else {
            callback(null, isMatch);
        }
    })
}

const User = mongoose.model('User', model)

export default User;