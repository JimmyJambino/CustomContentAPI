import {User} from '../../models/user.js'

class UserRepositoryClass {
    async create(userData) {
        try {
            const newUser = new User(userData);
            await newUser.save();
            return newUser;
        } catch (error) {
            throw error;
        }
    }

    async getById(userId) {
        try {
            return await User.findById(userId);
        } catch (error) {
            throw error;
        }
    }

    async update(userId, updatedUserData) {
        try {
            return await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
        } catch (error) {
            throw error;
        }
    }

    async remove(userId) {
        try {
            return await User.findByIdAndDelete(userId);
        } catch (error) {
            throw error;
        }
    }
}

export const UserRepository = new UserRepositoryClass()
