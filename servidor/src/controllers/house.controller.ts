import { Request, Response } from "express";
import { pool } from "../db/mysql";
import { House } from "../models/house.model";

// Arrendatario - ver casas disponibles
export const getAvailableHouses = async (req: Request, res: Response) => {
  const [rows] = await pool.query("SELECT * FROM houses WHERE is_rented = 0");
  res.json(rows);
};

// Arrendador - crear casa
export const createHouse = async (req: Request, res: Response) => {
  const { title, description, price, address, owner_id } = req.body;
  const [result]: any = await pool.query(
    "INSERT INTO houses (title, description, price, address, owner_id, is_rented) VALUES (?, ?, ?, ?, ?, 0)",
    [title, description, price, address, owner_id]
  );
  res.status(201).json({ id: result.insertId, ...req.body, is_rented: 0 });
};

// Arrendador - editar casa
export const updateHouse = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, price, address } = req.body;
  await pool.query(
    "UPDATE houses SET title=?, description=?, price=?, address=? WHERE id=?",
    [title, description, price, address, id]
  );
  res.json({ message: "Casa actualizada" });
};

// Arrendador - borrar casa
export const deleteHouse = async (req: Request, res: Response) => {
  const { id } = req.params;
  await pool.query("DELETE FROM houses WHERE id=? AND is_rented=0", [id]);
  res.json({ message: "Casa eliminada" });
};

// Arrendador - ver mis casas
export const getOwnerHouses = async (req: Request, res: Response) => {
  const { owner_id } = req.params;
  const [rows] = await pool.query("SELECT * FROM houses WHERE owner_id = ?", [
    owner_id,
  ]);
  res.json(rows);
};