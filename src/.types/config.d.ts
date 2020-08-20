/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The path to the folder where subsystems should be placed, rooted at the source folder.
 * `{BASE_PACKAGE}` is the package containing Main.java
 */
export type TheSubsystemPackage = string;
/**
 * The path to the folder where normal commands should be placed, rooted at the source folder.
 * `{BASE_PACKAGE}` is the package containing Main.java
 */
export type TheNormalCommandPackage = string;
/**
 * The path to the folder where instant commands should be placed, rooted at the source folder.
 * `{BASE_PACKAGE}` is the package containing Main.java
 */
export type TheInstantCommandPackage = string;
/**
 * The path to the folder where autonomous commands should be placed, rooted at the source folder.
 * `{BASE_PACKAGE}` is the package containing Main.java
 */
export type TheAutonomousCommandPackage = string;
/**
 * The path to the folder where auto and instant commands should be placed, rooted at the source folder.
 * `{BASE_PACKAGE}` is the package containing Main.java
 */
export type TheAutonomousAndInstantCommandPackage = string;
/**
 * The name of the class considered to at the base of the code
 */
export type TheNameOfTheBaseClass = string;
/**
 * The path to the folder containing source code, relative to the workspace root
 */
export type TheSourceFolder = string;
/**
 * The path to the folder containing built source code, relative to the workspace root
 */
export type TheBuildFolder = string;
/**
 * The path to the folder containing test code, relative to the workspace root
 */
export type TheTestFolder = string;
/**
 * If true, the missing FRCMocks warning will be hidden from wizards
 */
export type SuppressTheWarningAboutMissingFRCMocks = boolean;
/**
 * Types that represent motor controllers
 */
export type MotorControllerTypes = HardwareType[];
/**
 * Types that represent pneumatic hardware
 */
export type PneumaticHardwareTypes = HardwareType[];
/**
 * Types that represent sensors
 */
export type SensorTypes = HardwareType[];
/**
 * Types that represent other hardware
 */
export type OtherHardwareTypes = HardwareType[];

/**
 * The schema for botbuilder configuration file
 */
export interface BotbuilderConfigSchema {
  subsystemPackage: TheSubsystemPackage;
  commandPackage: TheNormalCommandPackage;
  instantCommandPackage: TheInstantCommandPackage;
  autoCommandPackage: TheAutonomousCommandPackage;
  instantAutoCommandPackage: TheAutonomousAndInstantCommandPackage;
  baseClassName: TheNameOfTheBaseClass;
  srcFolder: TheSourceFolder;
  buildFolder: TheBuildFolder;
  testFolder?: TheTestFolder;
  suppressMocksWarning?: SuppressTheWarningAboutMissingFRCMocks;
  hardware: HardwareTypes;
}
/**
 * The hardware components that will be recognised by the extension
 */
export interface HardwareTypes {
  motorControllers: MotorControllerTypes;
  pneumatics: PneumaticHardwareTypes;
  sensors: SensorTypes;
  other: OtherHardwareTypes;
}
export interface HardwareType {
  /**
   * The name of the hardware component's class
   */
  name: string;
  /**
   * A pretty-print version of the name to be used in creation dialogs
   */
  prettyName: string;
  /**
   * The descriptor for the component's class
   */
  descriptor: string;
  /**
   * The descriptor for the component's mock wrapper
   */
  mock:string;
  [k: string]: unknown;
}
