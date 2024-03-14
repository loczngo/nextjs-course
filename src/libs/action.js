"use server";
const bcrypt = require("bcryptjs");
import error from "@/app/error";
import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { revalidatePath } from "next/cache";

export const SayHello = async () => {
  console.log("hello");
};

export const handleLogout = async (e) => {
  "use server";
  await signOut();
};
export const handleLoginGithub = async (e) => {
  "use server";
  await signIn("github");
};

export const AddPost = async (prevState,formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return { error: "something went wrong" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("removed from db");
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return { error: "something went wrong!" };
  }
};

export const AddUser = async (prevState,formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "something went wrong" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.deleteMany({userId:id})
    await User.findByIdAndDelete(id);

    console.log("removed from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "something went wrong!" };
  }
};

export const register = async (previousState, formData) => {
  const { username, password, email, img, passwordAgain } =
    Object.fromEntries(formData);
  if (password !== passwordAgain) {
    return { error: "Password doesn't match" };
  }

  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "User already exists" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    console.log("saved to db");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "something messed up" };
  }
};

// 3:58 login

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
