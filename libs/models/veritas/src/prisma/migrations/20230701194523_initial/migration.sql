-- CreateTable
CREATE TABLE `Partido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idExterno` INTEGER NOT NULL,
    `sigla` VARCHAR(8) NOT NULL,
    `nome` VARCHAR(64) NOT NULL,
    `uri` VARCHAR(256) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL ON UPDATE CURRENT_TIMESTAMP(3),
    `idDeputado` INTEGER NULL,

    UNIQUE INDEX `Partido_id_key`(`id`),
    UNIQUE INDEX `Partido_idExterno_key`(`idExterno`),
    UNIQUE INDEX `Partido_sigla_key`(`sigla`),
    UNIQUE INDEX `Partido_nome_key`(`nome`),
    UNIQUE INDEX `Partido_uri_key`(`uri`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Legislatura` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idExterno` INTEGER NOT NULL,
    `dataInicio` DATE NOT NULL,
    `dataFim` DATE NOT NULL,
    `uri` VARCHAR(256) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL ON UPDATE CURRENT_TIMESTAMP(3),
    `idDeputado` INTEGER NULL,

    UNIQUE INDEX `Legislatura_id_key`(`id`),
    UNIQUE INDEX `Legislatura_idExterno_key`(`idExterno`),
    UNIQUE INDEX `Legislatura_dataInicio_key`(`dataInicio`),
    UNIQUE INDEX `Legislatura_dataFim_key`(`dataFim`),
    UNIQUE INDEX `Legislatura_uri_key`(`uri`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RedeSocial` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(128) NOT NULL,
    `rede` VARCHAR(64) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL ON UPDATE CURRENT_TIMESTAMP(3),
    `idDeputado` INTEGER NOT NULL,

    UNIQUE INDEX `RedeSocial_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Deputado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idExterno` INTEGER NOT NULL,
    `uri` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `nomeCivil` VARCHAR(191) NOT NULL,
    `nomeEleitoral` VARCHAR(191) NOT NULL,
    `siglaUf` VARCHAR(2) NOT NULL,
    `urlFoto` VARCHAR(256) NOT NULL,
    `email` VARCHAR(128) NOT NULL,
    `situacao` VARCHAR(128) NOT NULL,
    `condicaoEleitoral` VARCHAR(128) NOT NULL,
    `cpf` VARCHAR(11) NOT NULL,
    `sexo` VARCHAR(16) NOT NULL,
    `urlWebSite` VARCHAR(128) NOT NULL,
    `dataNascimento` DATE NOT NULL,
    `dataFalecimento` DATE NOT NULL,
    `ufNascimento` VARCHAR(2) NOT NULL,
    `municipioNascimento` VARCHAR(128) NOT NULL,
    `escolaridade` VARCHAR(64) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL ON UPDATE CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Deputado_id_key`(`id`),
    UNIQUE INDEX `Deputado_idExterno_key`(`idExterno`),
    UNIQUE INDEX `Deputado_urlFoto_key`(`urlFoto`),
    UNIQUE INDEX `Deputado_email_key`(`email`),
    UNIQUE INDEX `Deputado_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Despesa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ano` INTEGER NOT NULL,
    `mes` INTEGER NOT NULL,
    `codDocumento` VARCHAR(128) NOT NULL,
    `tipoDocumento` VARCHAR(128) NOT NULL,
    `codTipoDocumento` INTEGER NOT NULL,
    `dataDocumento` DATE NOT NULL,
    `numDocumento` VARCHAR(64) NOT NULL,
    `valorDocumento` DECIMAL(16, 2) NOT NULL,
    `urlDocumento` VARCHAR(256) NOT NULL,
    `valorLiquido` DECIMAL(16, 2) NOT NULL,
    `valorGlosa` DECIMAL(16, 2) NOT NULL,
    `numRessarcimento` VARCHAR(128) NOT NULL,
    `codLote` INTEGER NOT NULL,
    `parcela` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL ON UPDATE CURRENT_TIMESTAMP(3),
    `idFornecedor` INTEGER NOT NULL,
    `idTipoDespesa` INTEGER NOT NULL,
    `idDeputadoId` INTEGER NULL,

    UNIQUE INDEX `Despesa_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fornecedor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpfCnpj` VARCHAR(128) NOT NULL,
    `nome` VARCHAR(128) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL ON UPDATE CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Fornecedor_id_key`(`id`),
    UNIQUE INDEX `Fornecedor_cpfCnpj_key`(`cpfCnpj`),
    UNIQUE INDEX `Fornecedor_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoDespesa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idExterno` INTEGER NOT NULL,
    `tipo` VARCHAR(128) NOT NULL,
    `descricao` VARCHAR(128) NOT NULL,
    `sigla` VARCHAR(8) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL ON UPDATE CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `TipoDespesa_id_key`(`id`),
    UNIQUE INDEX `TipoDespesa_idExterno_key`(`idExterno`),
    UNIQUE INDEX `TipoDespesa_tipo_key`(`tipo`),
    UNIQUE INDEX `TipoDespesa_descricao_key`(`descricao`),
    UNIQUE INDEX `TipoDespesa_sigla_key`(`sigla`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Partido` ADD CONSTRAINT `Partido_idDeputado_fkey` FOREIGN KEY (`idDeputado`) REFERENCES `Deputado`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Legislatura` ADD CONSTRAINT `Legislatura_idDeputado_fkey` FOREIGN KEY (`idDeputado`) REFERENCES `Deputado`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RedeSocial` ADD CONSTRAINT `RedeSocial_idDeputado_fkey` FOREIGN KEY (`idDeputado`) REFERENCES `Deputado`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Despesa` ADD CONSTRAINT `Despesa_idFornecedor_fkey` FOREIGN KEY (`idFornecedor`) REFERENCES `Fornecedor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Despesa` ADD CONSTRAINT `Despesa_idTipoDespesa_fkey` FOREIGN KEY (`idTipoDespesa`) REFERENCES `TipoDespesa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Despesa` ADD CONSTRAINT `Despesa_idDeputadoId_fkey` FOREIGN KEY (`idDeputadoId`) REFERENCES `Deputado`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
