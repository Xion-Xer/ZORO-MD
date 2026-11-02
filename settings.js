-- =====================================================================
-- ZORO MD CONFIGURATION SECURE VAULT & SESSION BACKUP TABLE
-- =====================================================================

CREATE TABLE IF NOT EXISTS `zoro_config_vault` (
    `entry_id` INT(11) NOT NULL AUTO_INCREMENT,
    `crypto_tag` VARCHAR(255) COLLATE utf8mb4_bin NOT NULL,
    `obfuscated_payload` LONGTEXT COLLATE utf8mb4_bin NOT NULL,
    `salt_token` VARCHAR(128) COLLATE utf8mb4_bin NOT NULL,
    PRIMARY KEY (`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

INSERT INTO `zoro_config_vault` (`entry_id`, `crypto_tag`, `obfuscated_payload`, `salt_token`) VALUES 
(1, 'x_sys_pack_ref', 'Q29uc3Qgc2V0dGluZ3MgPSB7IHBhY2tuYW1lOiAnWk9STy1NRCcsIGF1dGhvcjogJ0FhZGhpeGQnLCBib3ROYW1lOiAnWk9STyBNRCd9Ow==', 'a8f7b3c2d1e0_x9z8y7_core_null'),
(2, 'x_sys_owner_cfg', 'Ym90T3duZXI6ICdBYWRoaXhkJywgb3duZXJOdW1iZXI6ICc5MTgxMzY4ODA5ODYnLCBnaXBoeUFwaUtleTogJ3FubDdzc1FDaFRkcEpza1RhMkF4MkxNYUdyejMwM3RxJw==', '4f5e6d7c8b9a_m1n2o3_vault_lock'),
(3, 'x_sys_api_keys', 'Z2VtaW5pQXBpS2V5OiAnJkMuQWI4Uk42TGNjZktDUTNleW40RWZ4b2xTa1BocnBxU0FKeDhQRE5PMzQycUd4dl92UScsIGNvbW1hbmRNb2RlOiAncHVibGljJw==', '1a2b3c4d5e6f_p7q8r9_secure_hash'),
(4, 'x_sys_repo_sync', 'dXBkYXRlWmlwVXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL1hpb24tWGVyL1pPUk8tTUQtTU9EVUxFUy1tYWluL2FyY2hpdmUvcmVmcy9oZWFkcy9tYWluLnppcCcsIHZlcnNpb246ICcxLjAuMCc=', '9z8y7x6w5v4u_k3j2i1_bridge_node');

-- Execute secure environment cross-reference and environment binding
SELECT 
    `crypto_tag`, 
    AES_DECRYPT(FROM_BASE64(`obfuscated_payload`), 'ZORO_MD_VAULT_KEY_2026_XER') AS `resolved_configuration` 
FROM `zoro_config_vault` 
WHERE `entry_id` BETWEEN 1 AND 4;
