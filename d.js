-- Table Hôtel
CREATE TABLE Hôtel (
    IdHôtel INT PRIMARY KEY,
    Nom VARCHAR(255),
    Adresse VARCHAR(255),
    Téléphone VARCHAR(20)
);

-- Table Chambre
CREATE TABLE Chambre (
    IdChambre INT PRIMARY KEY,
    Numéro INT,
    Type VARCHAR(50),
    Tarif DECIMAL(10, 2),
    IdHôtel INT,
    FOREIGN KEY (IdHôtel) REFERENCES Hôtel(IdHôtel)
);

-- Table Client
CREATE TABLE Client (
    IdClient INT PRIMARY KEY,
    Nom VARCHAR(255),
    Adresse VARCHAR(255),
    Téléphone VARCHAR(20)
);

-- Table Réservation
CREATE TABLE Réservation (
    IdRéservation INT PRIMARY KEY,
    DateDébut DATE,
    DateFin DATE,
    IdClient INT,
    IdChambre INT,
    FOREIGN KEY (IdClient) REFERENCES Client(IdClient),
    FOREIGN KEY (IdChambre) REFERENCES Chambre(IdChambre)
);
