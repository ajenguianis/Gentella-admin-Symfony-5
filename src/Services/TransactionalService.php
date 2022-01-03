<?php

namespace App\Services;

use Doctrine\ORM\EntityManager;
use Psr\Log\LoggerInterface;

abstract class TransactionalService
{
    /**
     * @var LoggerInterface
     */
    private $logger;

    /**
     * Add a service to this service
     *
     * @param integer $key   Key
     * @param string  $class Class
     *
     * @return void
     */
    public function addService($key, $service)
    {
        $this->$key = $service;
    }
    public function setLogger(LoggerInterface $logger): void
    {
        $this->logger = $logger;
    }
}
