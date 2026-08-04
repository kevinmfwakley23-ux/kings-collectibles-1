# K.I.N.G.S.
# Data Model

Version: 1.0

Status: LOCKED

---

# Purpose

This document defines the canonical data architecture for the K.I.N.G.S. platform.

The model establishes the primary business entities and their relationships.

Application implementation shall derive from this model.

---

# Core Entity

Collector

The Collector is the root entity of the Kingdom.

A Collector owns exactly one Kingdom.

---

# Kingdom

Represents the collector's complete environment.

Contains:

- Great Hall
- Vault
- Library
- Observatory
- War Room
- Treasury
- Workshop
- Marketplace
- Hall of Legacy
- Royal Chambers

---

# Shared Entities

Collector

Kingdom

Keeper

Notification

Conversation

Search

Memory

Image

Document

Attachment

Tag

Category

Project

Audit Record

Activity

Setting

Preference

---

# Domain Rule

Each Kingdom Room owns its own specialized entities.

Shared entities are referenced through identifiers.

Ownership is always traced back to the Collector.
