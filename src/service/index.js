import { UsersRepository } from "./repositories/users.repositoty.js";
import { sessionDao } from "../dao/factory.js";


export const usersDaoService = new UsersRepository(sessionDao);