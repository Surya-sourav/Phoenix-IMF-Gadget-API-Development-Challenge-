import { Request, Response, NextFunction } from 'express';
import { Status } from '@prisma/client'
import prisma from '../utils/prisma.client';
import { AppError } from '../utils/error.handler';

// Generate random codename for gadgets
const generateCodename = (): string => {
  const adjectives = ['Mighty', 'Silent', 'Phantom', 'Shadow', 'Stealth', 'Covert', 'Invisible', 'Deadly', 'Rapid', 'Quantum'];
  const nouns = ['Eagle', 'Panther', 'Cobra', 'Viper', 'Falcon', 'Wolf', 'Hawk', 'Tiger', 'Raven', 'Phoenix'];
  
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  
  return `The ${randomAdjective} ${randomNoun}`;
};

// Generate random mission success probability
const generateMissionProbability = (): number => {
  return Math.floor(Math.random() * 100);
};

// Get all gadgets with optional status filter
export const getAllGadgets = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { status } = req.query;
    
    const whereClause = status ? { status: status as Status } : {};
    
    const gadgets = await prisma.gadget.findMany({
      where: whereClause
    });
    
    const gadgetsWithProbability = gadgets.map(gadget => ({
      ...gadget,
      missionSuccessProbability: generateMissionProbability()
    }));
    
    res.status(200).json({
      status: 'success',
      results: gadgetsWithProbability.length,
      data: {
        gadgets: gadgetsWithProbability
      }
    });
  } catch (error) {
    next(error);
  }
};

// Create a new gadget
export const createGadget = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { status } = req.body;
    
    const gadget = await prisma.gadget.create({
      data: {
        name: generateCodename(),
        status: status || 'Available'
      }
    });
    
    res.status(201).json({
      status: 'success',
      data: {
        gadget
      }
    });
  } catch (error) {
    next(error);
  }
};

// Update a gadget
export const updateGadget = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name, status } = req.body;
    
    const gadget = await prisma.gadget.findUnique({
      where: { id }
    });
    
    if (!gadget) {
      return next(new AppError('No gadget found with that ID', 404));
    }
    
    const updatedGadget = await prisma.gadget.update({
      where: { id },
      data: {
        name,
        status
      }
    });
    
    res.status(200).json({
      status: 'success',
      data: {
        gadget: updatedGadget
      }
    });
  } catch (error) {
    next(error);
  }
};

// Decommission a gadget (soft delete)
export const decommissionGadget = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    
    const gadget = await prisma.gadget.findUnique({
      where: { id }
    });
    
    if (!gadget) {
      return next(new AppError('No gadget found with that ID', 404));
    }
    
    const decommissionedGadget = await prisma.gadget.update({
      where: { id },
      data: {
        status: 'Decommissioned',
        decomissionedAt: new Date()
      }
    });
    
    res.status(200).json({
      status: 'success',
      data: {
        gadget: decommissionedGadget
      }
    });
  } catch (error) {
    next(error);
  }
};

// Trigger self-destruct sequence for a gadget
export const selfDestructGadget = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    
    const gadget = await prisma.gadget.findUnique({
      where: { id }
    });
    
    if (!gadget) {
      return next(new AppError('No gadget found with that ID', 404));
    }
    
    // Generate confirmation code
    const confirmationCode = Math.floor(100000 + Math.random() * 900000);
    
    const updatedGadget = await prisma.gadget.update({
      where: { id },
      data: {
        status: 'Destroyed',
        selfDestruct: new Date()
      }
    });
    
    res.status(200).json({
      status: 'success',
      confirmationCode,
      message: 'Self-destruct sequence initiated',
      data: {
        gadget: updatedGadget
      }
    });
  } catch (error) {
    next(error);
  }
};