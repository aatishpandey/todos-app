import { z } from "zod";

const createTodoSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const updateTodoSchema = z.object({
  id: z.string(),
});

module.exports = {
  createTodoSchema: createTodoSchema,
  updateTodoSchema: updateTodoSchema,
};
