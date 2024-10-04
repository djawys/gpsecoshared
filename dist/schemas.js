"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountrySchema = void 0;
const zod_1 = require("zod");
exports.CountrySchema = zod_1.z.enum(['usa', 'uk', 'india']);
